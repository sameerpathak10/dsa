function mergeIntervals(intervals: number[][]): number[][] {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals);
    
    const merged: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        
        const lastMergedInterval = merged[merged.length - 1];
        console.log(`currentInterval:${currentInterval} lastMergedInterval:${lastMergedInterval} `);
        console.log(`currentInterval[0]:${currentInterval[0]} lastMergedInterval[1]:${lastMergedInterval[1]} `);
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }

    return merged;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]

console.log(mergeIntervals([[1,4],[2,3]]));

console.log(mergeIntervals([[1,4],[0,4]]));