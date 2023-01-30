
        function insert(num)
        {
            document.calculatorform.textview.value=document.calculatorform.textview.value+num;
        }
        function equal()
        {
            var exp=document.calculatorform.textview.value;
            if(exp)
            {
                document.calculatorform.textview.value=eval(exp);
            }
        }
        function backspace()
        {
            var exp=document.calculatorform.textview.value;
            document.calculatorform.textview.value=exp.substring(0, exp.length-1)
        }
   