ddescribe("Add", function() {
  it("should return 0 when the string is empty", function() {
    expect(add("")).toBe(0);
  });
  it("should add two string numbers", function() {
    expect(add("3,2")).toEqual(5);
  });
  it("should allow the Add method to handle new lines between numbers", function() {
    expect(add("1\n2,3")).toEqual(6);
  });

  
  it("should add values in one string separated by semi-colon", function() {
    let result = add("1,2", ",");
    expect(result).toBe(3);
  });

it("should throw an exception if there are negative numbers", function() {
  console.log(typeof add);
  expect(function(){
    let result = add("-3 ");
  }).toThrow(new  Error("Negatives not allowed"));
});
});
