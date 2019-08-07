/* import 'babel-polyfill';

import Vue from 'vue'
import Item from '../src/Item.vue'

Vue.use(Item)

import {mount} from '@vue/test-utils'

describe('Item.vue',function(){
    it('clicking submit button, updating boolean',()=>{
        const wrapper = mount(Item)
        const btn = wrapper.find('#invId')
        btn.trigger('click')
        expect(wrapper.vm.done).toBe(true)
        console.log("Successful 😊")
    })
})

 */