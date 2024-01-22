<?php
/**
 * Plugin Name:       Curvy Block
 * Description:       Plugin with example Gutenberg block named Curvy scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Marcin Szczepkowski
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       imaszcurvy
 *
 * @package           create-block
 */

namespace iMaSzPlugins;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
final class iMaSzCurvy {
	static function init(){
		add_action('enqueue_block_assets', function () {
			$style_url = plugins_url("build/style-index.css", __FILE__);
			wp_enqueue_style('blockylicious-style', $style_url, array());
		});
		add_action( 'init', function(){
			add_filter('block_categories_all', function($categories){
				array_unshift($categories, [
					'slug' => 'imaszcurvy',
					'title' => 'iMaSz Curvy'
				]);
				return $categories;
			});
			register_block_type( __DIR__ . '/build/blocks/curvyblock' );
		});

		register_block_pattern_category('imaszcurvy', array(
			'label' => __('iMaSz Curvy', 'imaszcurvy')
		));
		register_block_pattern('imaszcurvy/clicky-example', array(
			'categories' => array('banners', 'imaszcurvy'),
			'title' => __('Curvy banner', 'imaszcurvy'),
			'description' => __('A heading and paragraph in curvy block', 'imaszcurvy'),
			'content' => '<!-- wp:imaszcurvy/curvyblock {"style":{"spacing":{"padding":{"top":"120px","left":"20px","right":"20px","bottom":"120px"}}},"topWidth":200,"bottomWidth":150,"backgroundColor":"cyan-bluish-gray"} -->
			<!-- wp:columns -->
			<div class="wp-block-columns"><!-- wp:column {"width":"100%","layout":{"type":"constrained","wideSize":"900px"}} -->
			<div class="wp-block-column" style="flex-basis:100%"><!-- wp:heading -->
			<h2 class="wp-block-heading">Example title</h2>
			<!-- /wp:heading -->
			
			<!-- wp:paragraph -->
			<p>Example lorem ipsum text.</p>
			<!-- /wp:paragraph --></div>
			<!-- /wp:column --></div>
			<!-- /wp:columns -->
			<!-- /wp:imaszcurvy/curvyblock -->'
		));
		$script_url = plugins_url('build/index.js', __FILE__);
		wp_enqueue_script('imaszcurvy-index', $script_url, array('wp-blocks', 'wp-element', 'wp-editor'));
		$style_url = plugins_url("build/style-index.css", __FILE__);
		wp_enqueue_style('imaszcurvy-style', $style_url, array());
	}
}

iMaSzCurvy::init();
