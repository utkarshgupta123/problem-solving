var Perfect_Check = (N) => 
{
      let count=0;
      for(let i=1;i<=N;i++){
        if(N%i == 0)
        count=count+i;
      }
        if (count==N)
        return "YES";
        else
        return "NO";
};
 