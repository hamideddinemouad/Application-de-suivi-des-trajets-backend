import adminDashService from "../../../services/dashboard/admin/adminDashService.js";

export default async function adminDashController (req, res){
    const stats = await adminDashService();
    console.log(stats);
    res.status(200).json({message : stats});
}