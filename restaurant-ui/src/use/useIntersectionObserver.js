import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

export function useIntersectionObserver() {
    const target = ref();
    const animate = ref(false);
    const route = useRoute();
    const playAnimation = route.name === 'home'

    if(playAnimation) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    animate.value = true;
                }
            },
            {
                threshold: 0.2,
            }
        );
        onMounted(() => {
            observer.observe(target.value);
        });
    }

    return {
        animate,
        target,
        playAnimation
    }
}