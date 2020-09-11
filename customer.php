<?php
class customer{
    public $fname;
    public $lname;
    public $email;
    public $gender;
    public $city;
    public $mobile;
    public $booking_time;

    private $conn;

    public function __construct($conn)
    {
        $this->conn=$conn;
        
    }
    public function insertcustomerdetail($obj){
        $sql="INSERT INTO registrants (fname,lname,email,gender,city,mobile,booking_time) VALUES('$obj->fname','$obj->lname','$obj->email','$obj->gender','$obj->city','$obj->mobile','$obj->booking_time');";
            $result=mysqli_query($this->conn,$sql);
            if($result==TRUE)
            {
                $msg=["Form successfully submitted"];
            }
            else
            {
                $msg=["Error occurred while submitting information. Please try again later."];
            }
            
            return json_encode($msg);
    }
    public function getcutomerdetails(){
        $sql="SELECT * FROM registrants;";
        $result=mysqli_query($this->conn,$sql);
        $arr=array();
        if(mysqli_num_rows($result)>0)
        {
            while($row=mysqli_fetch_assoc($result))
            {
                $arr[]=$row;
            }
        }
        return json_encode($arr);      
    }

}
?>