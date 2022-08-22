var Minimal_Angle = (h, m) => 
{
       let hour = (h * 60 + m)*0.5;
       let minu = m * 6;
       let angle = Math.abs(hour - minu);
       let world = Math.min(360-angle , angle);
       return world;
};
