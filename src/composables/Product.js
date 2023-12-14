import { ref } from 'vue';

export function UseProduct () {
    const boolean1 = ref(true)
    const boolean2 = ref(false)
    
    
    function onDesc() {
        boolean2.value = false;
        boolean1.value = true;
        
    }
    
    function onComm() {
        boolean2.value = true;
        boolean1.value = false;
    }

    return {
        boolean1,
        boolean2,
        onDesc,
        onComm,
    }
}
