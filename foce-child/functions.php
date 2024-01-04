<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function enqueue_scripts() {
    wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.6.0.min.js', array(), '3.6.0', true, true );
    wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array('jquery'));
    wp_enqueue_script( 'foceChild', get_stylesheet_directory_uri() . '/js/slider.js', array('swiper'), false);
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

function theme_enqueue_styles() {
    wp_enqueue_style( 'foce-child-style', get_template_directory_uri() . '/style.css', array('foce-style'), _S_VERSION );
    wp_enqueue_style('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '1.0');
    // wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array('jquery'));
    // wp_enqueue_script( 'foceChild', get_stylesheet_directory_uri() . '/js/slider.js', array('swiper'), false);
}


// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}



