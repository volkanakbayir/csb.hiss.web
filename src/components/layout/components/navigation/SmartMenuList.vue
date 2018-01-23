<script>
import SmartMenuListItem from './smartMenuListItem.vue';
import 'lodash';

export default {
	name: 'SmartMenuList',
	components: {
		'smart-menu-list-item': SmartMenuListItem,
	},
	props: {
		rawMenuData: {
			type: Object,
			required: true,
		},
		defaultName: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			list: [],
		};
	},
	mounted() {
		if (this.rawMenuData) {
			var routeList = this.generateBranch(this.rawMenuData);
			this.bindHierarchy(routeList);
			this.adjustForUrl(routeList);
			this.list = routeList;
		}
	},
	watch: {
		rawMenuData() {
			var routeList = this.generateBranch(this.rawMenuData);
			this.bindHierarchy(routeList);
			this.adjustForUrl(routeList);
			this.list = routeList;
		},
	},
	methods: {
		parentCallback(item, cb) {
			if (item.parent) {
				cb(item.parent);
				this.parentCallback(item.parent, cb);
			}
		},
		_handleNav(navItem) {
			var flattened = [];
			this.flattenUriComponents(this.list, flattened);
			_.each(flattened, d => {
				d.active = false;
				d.expanded = false;
			});
			navItem.active = true;
			this.parentCallback(navItem, d => (d.expanded = true));
			this.$forceUpdate();
		},
		flattenUriComponents(items, container) {
			for (var i in items) {
				if (items[i].list) this.flattenUriComponents(items[i].list, container);
				container.push(items[i]);
			}
		},
		adjustForUrl(routeList) {
			var path = window.location.pathname;
			var flattened = [];
			this.flattenUriComponents(routeList, flattened);
			var sorted = _.sortBy(flattened, d => {
				return d.uri && d.uri.length;
			});
			sorted.reverse();

			var pathFound = _.find(sorted, d => {
				var pathIndex = path.indexOf(d.uri);
				return pathIndex > -1 && pathIndex < 2;
			});

			if (pathFound) {
				pathFound.active = true;
				this.parentCallback(pathFound, d => (d.expanded = true));
			}
		},
		generateBranch(menuBranch) {
			var branch = Object.keys(menuBranch).reduce((acc, item) => {
				let menuItem = { ...menuBranch[item] };

				if (menuItem.list) menuItem.list = this.generateBranch(menuItem.list);

				if (menuItem.list && !menuItem.uri) {
					menuItem.expand = true;
					menuItem.expanded = false;
				}
				return acc.concat(menuItem);
			}, []);
			return branch;
		},
		bindHierarchy(branch, parentItem) {
			_.each(branch, d => {
				d.parent = parentItem;
				d.list && this.bindHierarchy(d.list, d);
			});
		},
	},
	template: '<smart-menu-list-item :menu="list" @handleNav="_handleNav" />',
};
</script>