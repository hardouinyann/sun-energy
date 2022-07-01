<template>
    <ion-item lines="full" mode="md" :class="['se-input-item', {'se-input-item--required': required}]">
        <ion-label position="floating">
            <ion-icon :icon="icon" v-if="icon" />
            <span :class="[{ 'no-margin': !icon }]">{{ label }}</span>
        </ion-label>
        <ion-input :value="modelValue" @ionChange="updateValue($event)" :type="type" :step="step" :min="min" :max="max" />
        <div slot="end" class="se-input__text-end" v-if="suffix || true">
            <strong>{{ suffix }}</strong>
        </div>
    </ion-item>
</template>

<script setup lang="ts">
import { useInput } from '@/hooks/useInput';

// eslint-disable-next-line
interface InputProps {
    modelValue?: string | number;
    icon?: string;
    label: string;
    suffix?: string;
    required?: boolean;
    validator?: (model?: string | number) => boolean;
    type?: string;
    min?: number;
    max?: number;
    step?: string;
    minLength?: number;
    maxLength?: number;
}

const props = withDefaults(defineProps<InputProps>(), { type: 'string' });
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

    .se-input__text-end {
        margin: auto;
        top: 0;
        bottom: 0;
    }
}

.item-has-focus ion-label.label-floating {
    margin-top: 0;
}
</style>