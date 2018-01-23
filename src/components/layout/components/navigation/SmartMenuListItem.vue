<template>
	<ul>
		<li v-for="item in menu" :key="item.id" :class="{'open': item.expanded, expanded: item.expanded , active : item.active }">
			<template v-if="item.vueRouter">
				<router-link :to="item.uri" active-class="" exact-active-class="" @toggleActive="activate(item)">
					<i v-if="item.icon" :class="item.icon"></i>
					<span>{{item.name}}</span>
				</router-link>
			</template>
			<template v-else-if="item.expand">
				<a @click.prevent="expandTrigger(item)">
					<i v-if="item.icon" :class="item.icon"></i>
					<span>{{item.name}}</span>
					<b class="collapse-sign">
						<em v-if="item.expanded" class="fa fa-minus-square-o"></em>
						<em v-else class="fa fa-plus-square-o"></em>						
					</b>
				</a>
			</template>
			<template v-else>
				<a v-if="item.uri" :href="item.uri">{{item.name}}</a>
				<span  @click="expandTrigger(item)">{{item.name}}</span>
			</template>
			<transition name="slide-toggle" mode="out-in">
				<smart-menu-list-item v-if="item.list && item.expanded" :menu="item.list"></smart-menu-list-item> 
			</transition>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'SmartMenuListItem',
	props: {
		menu: {
			required: true,
			type: Array,
		},
	},
	methods: {
		activate(item){
			item.active = true;
		},
		expandTrigger(item) {
			if (item.expand) item.expanded = !item.expanded;
		},
		changeRouteItem(item) {},
	},
};
</script>
<style scoped>
.open > ul {
	display: block;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
	transition: opacity 0.3s;
}
.slide-toggle-enter-active {
	opacity: 1;
}
.slide-toggle-enter,
.slide-toggle-leave-active {
	opacity: 0;
}
.slide-toggle-leave {
	opacity: 1;
}
</style>
