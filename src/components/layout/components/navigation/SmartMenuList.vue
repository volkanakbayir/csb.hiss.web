<template>
    <ul class="menu-item" :class="{ active: menuActive, open : menuActive }">
        <smart-menu-list-item v-for="menuItem in items" :key="menuItem.route" :menuItem="menuItem"></smart-menu-list-item>
    </ul>
</template>

<script>
import SmartMenuListItem from './smartMenuListItem';
import Vue from 'vue';

let comp = Vue.component('smart-menu-list', {
	name: 'smart-menu-list',
	props: ['items'],
	components: {
		SmartMenuListItem,
	},
	methods: {
		hasActiveChild(items) {
			for (let item in items) {
				let itemInstance = items[item];
				if (itemInstance.children && this.hasActiveChild(itemInstance.children)) {
					return true;
				}
				if (item.active) return true;
			}
		},
	},
	computed: {
		menuActive() {
			return this.hasActiveChild(this.items);
		},
	},
});
export default comp;
</script>

<style  scoped>
.menu-item.active {
	display: block;
}
</style>
