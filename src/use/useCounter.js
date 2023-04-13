import { reactive, computed, watch, onMounted, nextTick } from "vue";

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: "My Counter",
  });

  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert("You made it to 20!");
      }
    }
  );

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    return "odd";
  });

  const increaseCounter = async (amount, e) => {
    counterData.count += amount;
    await nextTick();
    console.log("do something when counter has updated in the DOM");
  };
  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };
  onMounted(() => {
    console.log("Do stuff related to Counter");
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
