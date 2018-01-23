<template>
<transition>
    <router-link tag="li" active-class="active" :to="menuItem.route" @click="selectMenu(menuItem)" exact-active-class="active" exact>
        <a>
            <i :class="menuItem.icon"></i> 
            <span class="menu-item-parent">{{ menuItem.title }}</span>
            <b v-if="menuItem.children" class="collapse-sign">
                <em v-if="menuItem.active" class="fa fa-minus-square-o"></em>
                <em v-else class="fa fa-minus-square-o"></em>            
            </b>
        </a>
    
        <smart-menu-list v-if="menuItem.children" :items="menuItem.children" :active="active"></smart-menu-list>
    </router-link>
</transition>
</template>
<script>
import SmartMenuList from './SmartMenuList';
import { mapActions } from 'vuex';

export default {
	props: ['menuItem'],
	data: () => {
		return {
			active: false,
			open: false,
		};
	},
	methods: {
		...mapActions({
			selectMenu: state => {
				console.log(state);
				state.menu.menuSelected;
			},
		}),
	},
};
</script>
