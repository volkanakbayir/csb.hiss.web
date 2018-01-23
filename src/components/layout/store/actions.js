import menuConfig from '@/config/menu-items';

export default {
    "$_layout/loadMenu": context => {
        context.commit("$_layout/menuContextChanged", menuConfig);
    },
    "$_layout/menuItemClicked": (context, menuItem) => {
        var allItems = context.state.menuItems;
    }
}