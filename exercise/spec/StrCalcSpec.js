
describe("Add", function(){
    it("should return 0 when the string is empty" , function(){
        expect(add("")).toBe(0);
    })
     it("should add two string numbers", function(){
      expect(add("7,2")).toEqual(9)
     })
     it("should Support different delimiters", function(){
        expect(add("//;\n1;2")).toEqual(6) 
     })
     it("should allow the Add method to handle new lines between numbers",function(){
         expect(add("1\n2,3")).toEqual(6)
     })
     it("should throw an exception if there are negative numbers", () => {
            expect(() => { add("-3,1") }).toThrowError();
       })
})