
export function animateCountUp(element: HTMLElement, start: number, end: number, duration: number): void {
    const range = end - start;
    const increment = range / (duration * 60); // Assuming 60 frames per second

    let current = start;
    const updateCount = () => {
        if (current < end) {
            current += increment;
            element.textContent = Math.floor(current).toString(); // Update the element's text content
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = end.toString(); // Ensure the final value is exact
        }
    };

    updateCount();
}
