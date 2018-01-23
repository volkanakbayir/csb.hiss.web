import menuConfig from '@/config/menu-items.json';

export default {
    "$_layout/loadMenu": context => { 
        context.commit("$_layout/menuContextChanged", menuConfig.items);
    }
}