const mongoose=require('mongoose')


//Schema design
const tourSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide a name for this tour"],
        trim:true,
        unique:[true,"tour name must be unique"],
        minLength:[3,"name should be atleast 3 characters"],
        maxLength:[100,"name is too long"]

    },

    description:{
        type:String,
        required:true,

    },

    img:{
        type:String,
        required:true

    },

    viewCount:{
        type:Number,
        required:true,
        min:[0,"viewCount can't be negative"],
        validate:{
            validator:(value)=>{
                const isInteger=Number.isInteger(value)
                if(isInteger){
                    return true

                }
                else{
                    return false

                }
            }
        },

        message:"viewCount must be integer"

    },
    duration:{
        type:Number,
        required:true,
        min:[0,"duration can't be negative"],
        validate:{
            validator:(value)=>{
                const isInteger=Number.isInteger(value)
                if(isInteger){
                    return true

                }
                else{
                    return false

                }
            }
        },

        message:"duration must be integer"
        
    },

    period:{
        type:String,
        required:true,
        enum:{
            values:["days","weeks","months"],
            message:"period can't be {value} must be days/weeks/months"
        }

    },

    price:{
        type:Number,
        required:true,
        validator:{
            validate:(value)=>{
                const isInteger=Number.isInteger(value)
                if(isInteger){
                    return true
                }
                else{
                    return false
                }
            }
        }
    }

   
},{
    timestamps:true
})



//SCHEMA MODEL QUERY

const Tour=mongoose.model('Tour',tourSchema)

module.exports=Tour