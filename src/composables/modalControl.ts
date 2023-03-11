import { ref } from "vue";

const modalControl = () => {
    const visible = ref(false);
    const handleModal = () => {
        return visible.value = !visible.value;
    }
    return { visible, handleModal }
}
export default  modalControl ;