const PasswordInput = ({label,placeholder,className,value,setValue}) =>{
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className="font-sans">
                {label}
            </label>
            <input type="password" 
            placeholder={placeholder} className="p-2 placeholder-gray-500 border border-gray-600 border-solid rounded"
            id={label} 
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
                }}></input>
        </div>
        
    ); 
};

export default PasswordInput;