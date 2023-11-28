const mongoose=require( 'mongoose');
const bcrypt=require( 'bcryptjs');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:null,
    },
    gmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneno:{
        type:Number,
        require:true
    },
    otp:{
        type:Number,
        default:null,
    },
    catageory:{
        type:String,
        required:true
    }
},{
    timestamps:true
}
) ;
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10);
       this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.passwordcheck=async function(enteredpassword){
return bcrypt.compare(enteredpassword,this.password);
}

module.exports=mongoose.model('users',userSchema);