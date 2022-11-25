## CSS Foundations
# What are the main differences between external, internal, and inline CSS?
    external - make the project looks cleaner and organized, since we're working on different files. 
    internal - it can be used to add a style to a *single* page, it is not as efficient as the external method, even though it can be used. 
    inline - it can be used to add style to a *single* element. Using this method can get pretty messy and not even close to efficient. 
# What is the syntax for class and ID selectors?
    class="name-of-the-class"
    id="name-of-the-id"
# How would you apply a single rule to two different selectors?
    Listing them with a comma, such as *div, p {

    }*
# Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
    Using just the id attribute would be enough 
# What does the descendant combinator do?
    It looks for descendants with the ancestors selectors 
# Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?
    The class selector. 