<template>
    <aside id="left-panel">
        	<!-- User info -->
			<div class="login-info">
				<span> <!-- User image size is adjusted inside CSS, it should stay as is --> 	
					<a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
						<span>
							john.doe 
						</span> 
					</a> 
				</span>
			</div>
			<!-- end user info -->
        <smart-menu :rawItems="menuItems"></smart-menu>
        <!-- <minify-menu></minify-menu> -->
    </aside>
</template>
<script>
import SmartMenu from '@/components/layout/components/navigation/SmartMenu';
import { mapGetters } from 'vuex';
export default {
	components: {
		SmartMenu,
	},
	computed: {
		...mapGetters({
			menuItems: '$_layout/menuItems',
		}),
	},
};
</script>
