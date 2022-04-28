import { InputProps } from "@/models/input";
import { InputWrapperExposed } from "@/models/input-wrapper";
import { computed, ComputedRef, getCurrentInstance, nextTick, onMounted, Ref, ref } from "vue";

export const useInput = (props: InputProps, emits: { (e: 'update:modelValue', value: string | number ): void }) => {
    const inputUuid = getCurrentInstance()?.uid || Date.now();
    
    const parent: Ref<InputWrapperExposed> = ref(getCurrentInstance()?.parent?.exposed) as Ref<InputWrapperExposed>;
    
    const isInputValid = computed(() => props.validator?.(props.modelValue) ?? Boolean(props.modelValue));
    const borderColor: ComputedRef<string> = computed(() => isInputValid.value ? 'var(--ion-color-success)' : 'var(--ion-color-danger)');
    
    const updateValue = (event: CustomEvent) => {
        emits('update:modelValue', event.detail.value);
    
        if (props.required) {
            nextTick(() => parent.value?.updateValid(inputUuid, isInputValid.value));
        }
    }
    
    onMounted(() => {
        if (props.required) {
            parent.value?.updateValid(inputUuid, isInputValid.value);
        }
    });

    return {
        inputUuid,
        emits,
        parent,
        isInputValid,
        borderColor,
        updateValue,
    };
};