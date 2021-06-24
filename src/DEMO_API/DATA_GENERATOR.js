export function GenerateDatasets(size){
    let data = [];
    let i=0;
    while(i<size){
        // console.log(data)
        data.push(Math.round(Math.random() * 50));
        i++;
    }

    return data;
}

export default function callAPI(size){
    return GenerateDatasets(size)
    // setTimeout(()=> GenerateDatasets(size), 100);
}