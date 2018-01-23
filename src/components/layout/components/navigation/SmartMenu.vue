<template>
    <nav>
        <smart-menu-list :items="rawItems"></smart-menu-list>
    </nav>
</template>

<script>
import SmartMenuList from './SmartMenuList';

export default {
	props: ['rawItems'],
	components: {
		SmartMenuList,
	},
	methods: {},
	computed: {},
};
</script> 