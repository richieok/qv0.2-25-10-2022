<script>
    export let method = 'POST';
    export let action= '/'
</script>

<form {action} {method}>
    <slot></slot>
</form>