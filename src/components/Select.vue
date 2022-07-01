<template>
    <ion-item lines="full" mode="md"  :class="['se-input-item', {'se-input-item--required': required}]">
        <ion-label position="floating">{{ label }}</ion-label>
        <ion-select interface="popover" :placeholder="placeholder"
            :value="modelValue"
            @ionChange="updateValue($event)"
        >
            <ion-select-option v-for="(option, index) in options"
                :key="index"
                :value="option.value"
            >
                {{ option.label }}
            </ion-select-option>
        </ion-select>
    </ion-item>        
</template>

<script setup lang="ts">
import { useInput } from '@/hooks/useInput';

// eslint-disable-next-line
interface SelectProps {
    modelValue?: string | number;
    label: string;
    placeholder?: string;
    options: { value: string, label: string }[];
    required?: boolean;
    validator?: (model?: string | number) => boolean;
    type?: string;
    min?: number;
    max?: number;
}

const props = defineProps<SelectProps>();
const emits = defineEmits<{
    (e: 'update:modelValue', value: string | number): void,
}>();

const {
    borderColor,
    updateValue,
} = useInput(props, emits);
</script>

<style lang="scss" scoped>
ion-item.se-input-item {
    margin-bottom: 20px;
    border: solid 1px #bcbcbc;
    border-radius: 9px;

    &--required {
        border-right: 5px solid v-bind('borderColor');
    }

    ion-label.label-floating {
        display: flex;
        flex-direction: row;
        align-items: center;

        span:not(.no-margin) {
            margin-left: 10px;            
        }
    }
}

.item-has-focus ion-label.label-floating {
    margin-top: 0;
}
</style>