'use strict';

import $ from 'jquery';

export default class List {
  constructor() {
    this.name = 'list';
    console.log('%s module', this.name);


    let $btn_info = $('.btn-info');
    let $content = $('.content');

    $btn_info.on('click',function(){
    	$content.html("Content changed using jquery");
    });
  }
}
