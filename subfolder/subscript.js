function GetGreeting()
{
    var retVal = document.getElementById("num1");
    if (retVal == null)
        return null;
    
    return retVal.value;
}

function main()
{
    console.log(GetGreeting() + utilfunction());
}