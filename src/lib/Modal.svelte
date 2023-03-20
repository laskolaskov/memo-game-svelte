<script lang="ts">
    export let showModal; // boolean
    export let css: string
    let dialog; // HTMLDialogElement
    

    $: if (dialog && showModal) {
        dialog.showModal()
    } else {
        if(dialog && !showModal) dialog.close()
    }
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    class={css}
>
    
    <div on:click|stopPropagation>
        <slot />
        <!-- svelte-ignore a11y-autofocus -->
        <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
</style>
