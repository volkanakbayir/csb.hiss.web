<template>
    <aside id="left-panel">
        	<!-- User info -->
			<div class="login-info">
				<span> <!-- User image size is adjusted inside CSS, it should stay as is --> 	
					<a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
						<span>
							Test Kullanıcı 
						</span> 
					</a> 
				</span>
			</div>
			<!-- end user info -->
		<nav>
			<smart-menu-list :raw-menu-data="menuItems"></smart-menu-list>
		</nav>
        <!-- <minify-menu></minify-menu> -->
    </aside>
</template>
<script>
import SmartMenuList from './navigation/smartMenuList';
import { mapGetters } from 'vuex';
export default {
	components: {
		SmartMenuList,
	},
	computed: {
		...mapGetters({
			menuItems: '$_layout/menuItems',
		}),
	},
};
</script>
