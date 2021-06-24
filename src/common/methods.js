//get hh:mm from seconds
export function getTime(seconds){
    return new Date(seconds).toISOString().substr(11,5);
}

//get TIme labels (x-axis)
export function getLabels(data){
    let labels = [];
    let i=0;
    while(i<data.length/10){
        // console.log("Bar",i,  data[i]);
        labels.push(getTime(data[i][0]))
        i++;
    }
    // console.log("labels",labels)
    return labels;
}

//get heartRate (y-axis)
export function filterData(data){
    let filtered = [];
    data.forEach(d => filtered.push(d[1]))
    // console.log(filtered)
    return filtered
}