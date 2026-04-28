<template>
    <div>
        <label :for="identity" class="fw-semibold">
            {{ label }} <span style="color: #cb3a31">*</span>
            
            <slot></slot>
            
        </label>
        
        <input 
            :class="[{'d-none' : isImage}, 'form-control']" 
            :type="type" 
            :id="identity"
            :placeholder="placeholder" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :readonly="readonly === '1'" 
        />
    </div>
</template>

<script setup>
defineProps({
    isImage: { type: Boolean, require: true, default: false },
    type: { type: String, required: true },
    label: { type: String, required: true },
    identiy: { type: String, required: true }, 
    placeholder: { type: String, required: false, default: '' },
    readonly: { type: String, required: false, default: "0" }
});

</script>