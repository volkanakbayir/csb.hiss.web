<script>
import SmartMenuListItem from './smartMenuListItem.vue';
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
			this.list = this.generateBranch(this.rawMenuData);
		}
	},
	watch: {
		rawMenuData() {
			this.list = this.generateBranch(this.rawMenuData);
		},
	},
	methods: { 
		generateBranch(menuBranch) {
			return Object.keys(menuBranch).reduce((acc, item) => {
				let menuItem = { ...menuBranch[item] };

				if (menuItem.list) menuItem.list = this.generateBranch(menuItem.list);

				if (menuItem.list && !menuItem.uri) {
					menuItem.expand = true;
					menuItem.expanded = false;
				}
				menuItem.parent = menuBranch;
				return acc.concat(menuItem);
			}, []);
		},
	},
	template: '<smart-menu-list-item :menu="list" />',
};
</script>