const tourService=require('../services/tour.services')
exports.getAllTours=async(req,res,next)=>{
    try {

        const queries={}
        if(req.query.fields){
            const fields=req.query.fields.split(',').join(' ')
            console.log(fields);
            queries.fields=fields
            console.log(queries);
        }


        if(req.query.sort){
            const sort=req.query.sort
            queries.sort=sort
           
        }


        if(req.query.page){
            const {page=1,limit=3}=req.query
            const skip=(+page-1)*(+limit)
            queries.skip=skip
            queries.limit=limit
        }


        
        const result=await tourService.getTourservice(queries)
        res.status(200).json({
            status:"sucess",
            data:result

        })
        
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message:"data is not get",
            error:error.message
        })
        
    }


}

exports.createTours=async(req,res,next)=>{

  try {
    const result=await tourService.createTourService(req.body)
    res.status(200).json({
        status:"success",
        message: "Data inserted successfully",
        data: result

    })
  } catch (error) {

    res.status(400).json({
        status: 'failed',
        message: "Data is not inserted ",
        error: error.message
    })

    
  }

}


exports.getATour=async(req,res)=>{
    try {
        
        const result=await tourService.getOneTourService(req.params.id)
        // console.log(result);
        res.status(200).json({
            status:"success",
            message: "Data inserted successfully",
            data: result
    
        })

        
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Data is not inserted ",
            error: error.message
        })

        
    }
}


exports.mostTrendingTour=async(req,res)=>{
    try {

        const result=await tourService.mostTrendingTourService() 

        res.status(200).json({
            status:"sucess",
            data:result

        })
        
    } catch (error) {

        res.status(400).json({
            status:"failed",
            message:"data is not get",
            error:error.message
        })



        
    }
}



exports.cheapestTour=async(req,res)=>{
    try {

        const result=await tourService.cheapestTourService()

        res.status(200).json({
            status:"sucess",
            data:result

        })

        
    } catch (error) {


        res.status(400).json({
            status:"failed",
            message:"data is not get",
            error:error.message
        })
        
    }
}


exports.updateAToor=async(req,res)=>{
    try {

        const {id}=req.params;
        const result=await tourService.updateAToorService(id,req.body)
        res.status(200).json({
            status:"success",
            message: "Data updated successfully",
            data: result
    
        })

        
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: "Data is not updated ",
            error: error.message
        })
        
    }
}