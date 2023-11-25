const TextInput = ({label,placeholder,className,value,setValue,labelClassName}) =>{
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className={`font-sans ${labelClassName}`}>
                {label}
            </label>
            <input type="text" 
            placeholder={placeholder} className="p-2 placeholder-gray-500 border border-gray-600 border-solid rounded"
            id={label} 
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
                }}></input>
        </div>
        
    ); 
};

export default TextInput;