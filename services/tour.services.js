
const Tour=require('../model/tour')

exports.getTourservice=async(queries)=>{
    const result=await Tour.find({}).sort(queries.sort).select(queries.fields).skip(queries.skip).limit(queries.limit)
    const totalTours=await Tour.countDocuments()
    // const result=await Tour.find({}).sort({price:1})
    return {totalTours,result};

    // {$inc : {'viewCount' : 1}}

}

exports.createTourService=async(data)=>{


    const result=await Tour.create(data)
    return result;
}


exports.getOneTourService=async(id)=>{
    console.log(id);
    const result=await Tour.findOneAndUpdate({_id :id},{$inc : {'viewCount' : 1}})
    console.log(result);
    return result
}

exports.mostTrendingTourService=async()=>{
    const result=await Tour.find({}).sort({viewCount:-1}).limit(3)
    return result

}

exports.cheapestTourService=async()=>{

    const result=await Tour.find({}).sort({price:1}).limit(3)
    return result

}

exports.updateAToorService=async(tourId,data)=>{
    const result=await Tour.updateOne({_id:tourId},{$set:data})
    return result
}