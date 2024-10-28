import { useState, useCallback, useLayoutEffect, RefCallback } from "react";

// Define a type for the debounce function's callback
type Callback = (...args: unknown[]) => void;

const debounce = (limit: number, callback: Callback): Callback => {
    let timeoutId: NodeJS.Timeout | undefined;
    return (...args: unknown[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => callback(...args), limit);
    };
};

// Define a type for the dimension object
interface DimensionObject {
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    right: number;
    bottom: number;
}

function getDimensionObject(node: HTMLElement): DimensionObject {
    const rect = node.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        x: rect.x,
        y: rect.y,
        right: rect.right,
        bottom: rect.bottom
    };
}

export default function useBoundingRect(limit?: number): [RefCallback<HTMLElement>, DimensionObject, HTMLElement | null] {
    const [dimensions, setDimensions] = useState<DimensionObject>({} as DimensionObject);
    const [node, setNode] = useState<HTMLElement | null>(null);

    const ref: RefCallback<HTMLElement> = useCallback((node: HTMLElement | null) => {
        setNode(node);
    }, []);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined' && node) {
            const measure = () =>
                window.requestAnimationFrame(() =>
                    setDimensions(getDimensionObject(node))
                );

            measure();

            const listener = debounce(limit !== undefined ? limit : 100, measure);

            window.addEventListener("resize", listener);
            window.addEventListener("scroll", listener);
            return () => {
                window.removeEventListener("resize", listener);
                window.removeEventListener("scroll", listener);
            };
        }
    }, [node, limit]);

    return [ref, dimensions, node];
}