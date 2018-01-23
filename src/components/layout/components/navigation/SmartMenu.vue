<template>
    <nav>
        <smart-menu-list :items="rawItems"></smart-menu-list>
    </nav>
</template>

<script>
import SmartMenuList from './smartMenuList';

export default {
	props: ['rawItems'],
	components: {
		SmartMenuList,
	},
	methods: {},
	computed: {},
};
</script> 