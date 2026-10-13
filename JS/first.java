public class first{
    public static void main(String args[]){
    int a = 123;
        int o=a;
        //121/10==12.1
        //121%10==1
        int r=0;
  
        
        while(a>0){
            int d=a%10;
            r=r*10+d;
            a=a/10;
        
        }
        System.out.println(r);
}}