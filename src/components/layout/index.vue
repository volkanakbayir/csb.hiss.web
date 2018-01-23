<template>
    <div>
        <ba-header></ba-header>
        <ba-navigation></ba-navigation>
        <div id="main" role="main">
            <router-view></router-view>
        </div>
        <ba-footer></ba-footer>
    </div>
</template>


<script>
import store from './store';
import header from './components/Header';
import navigation from './components/Navigation';
import footer from './components/Footer';
export default {
	components: {
		props: ['children'],
		baHeader: header,
		baNavigation: navigation,
		baFooter: footer,
	},
	created() {
		this.$store.registerModule('$_layout', store);
	},
	mounted() {},
	destroyed() {
		this.$store.unregisterModule('$_layout');
	},
};
</script>
