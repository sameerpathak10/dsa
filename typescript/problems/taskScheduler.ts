function leastInterval(tasks: string[], n: number): number {

    const taskMap = new Map<string, number>();
    tasks.forEach(task => {
        taskMap.set(task, (taskMap.get(task) || 0) + 1);
    });

    const maxHeap: { task: string, count: number }[] = [];
    taskMap.forEach((count, task) => {
        maxHeap.push({ task, count });
    });

    maxHeap.sort((a, b) => b.count - a.count);

    let interval = 0;

    while (maxHeap.length > 0) {
        let temp = [];
        let i = 0;
        while (i <= n) {
            if (maxHeap.length > 0) {
                let currentTask = maxHeap.shift()!;
                if (currentTask.count > 1)
                    temp.push({ task: currentTask.task, count: currentTask.count - 1 });
            }
            interval++;
            
            if (maxHeap.length === 0 && temp.length === 0)
                break;
            i++;

        }
        temp.forEach(task => maxHeap.push(task));
        maxHeap.sort((a, b) => b.count - a.count);

    }
    maxHeap.forEach(value => console.log(`interval: ${interval} {task:${value.task}, count:${value.count}}`));
    return interval;
};

// Example usage 
const tasks1 = ["B", "C", "D", "A", "A", "A", "A", "G"];//["A", "A", "A", "B", "B", "B"];
const n1 = 1;
console.log(leastInterval(tasks1, n1));