<template>
    <div>
        <ba-header></ba-header>
        <ba-navigation></ba-navigation>
        <div id="main" role="main">
            <transition  name="slide" mode="out-in">
              <router-view></router-view>     
            </transition>
        </div>
        <ba-footer></ba-footer>
    </div>
</template>

<script>
import store from './store';
import header from './components/header';
import navigation from './components/navigation';
import footer from './components/footer';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('$_layout');
export default {
	components: {
		baHeader: header,
		baNavigation: navigation,
		baFooter: footer,
	},
	created() {
		this.$store.registerModule('$_layout', store);
	},
	mounted() {
		this.$store.dispatch('$_layout/loadMenu');
	},
	destroyed() {
		this.$store.unregisterModule('$_layout');
	},
};
</script>
<style scoped>
.slide-enter {
	opacity: 0;
}
.slide-enter-active {
	transition: opacity 0.4s;
}

.slide-leave {
}
.slide-leave-active {
	transition: opacity 0.4s;
	opacity: 0;
}
</style>
