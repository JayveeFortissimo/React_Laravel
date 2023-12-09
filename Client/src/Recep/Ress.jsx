import React from 'react'
import CH from './Repsie.module.css'
import NavBarMain from '../Items/NavBarMain'
import Aos from 'aos'
import Footers from '../MainPage/Footers';
import { useEffect,useState } from 'react'
const Ress = () => {

    const [md,setmd] = useState('Modals');

    const MDD = () =>{
         setmd('Modal')
    }
      

    useEffect(()=>{
        Aos.init({duration:2000})
   })

   const [isChecked,setChecked] = useState(false);
 
   const shows = () =>{
     setChecked(!isChecked)
   }
 


  return (
 <>
 <NavBarMain />

 {
  md === 'Modal' &&
 <div className="modals">

<div className="overlays">

  <div className="modal-contents">
    <h2> Terms and Conditions</h2>

<div className='MKLL'>


  <div >
        <h3> Acceptance of Terms</h3>
        <p style={{ fontSize:'0.8rem' }}>By accessing and using SweetDesserts, you agree to be bound by these terms and <br />conditions. If you do not agree with any part of these terms, you may not use our website. </p>
  </div>

  <div>
        <h3>User Eligibility</h3>
        <p style={{ fontSize:'0.8rem' }}>You must be 12 or older to use Your Sweet Dessert Website. By using the  <br />website, you confirm that you meet this eligibility requirement </p>
  </div>
    
  <div>
        <h3>Website Access</h3>
        <p style={{ fontSize:'0.8rem' }}>We grant you a limited, revocable, and non-exclusive license to access and use Your Sweet Dessert Website for personal use. <br />We reserve the right to restrict access to certain areas of the website, or the entire website, at our discretion. </p>
  </div>

  <div>
        <h3>User Accounts</h3>
        <p style={{ fontSize:'0.8rem' }}>If you choose to create a user account on Your Sweet Dessert Website, you are responsible for maintaining the confidentiality of your account and password. <br />You agree to accept responsibility for all activities that occur under your account. </p>
  </div>

  <div>
        <h3> Content Usage</h3>
        <p style={{ fontSize:'0.8rem' }}>ll content on Sweet Dessert Website, including text, images, and graphics, is the property of our company and is protected by intellectual property laws <br /> You may not copy, reproduce, distribute, or modify any content without our express written consent.</p>
  </div>

  <div>
        <h3>Privacy Policy</h3>
        <p style={{ fontSize:'0.8rem' }}>Please review our Privacy Policy link to privacy policy to understand how we collect, use, and safeguard your personal information. </p>
  </div>

  <div>
        <h3>Cookies</h3>
        <p style={{ fontSize:'0.8rem' }}>Our Website may use cookies to enhance user experience. By using the website, you consent to the use of cookies in accordance with our Privacy Policy.</p>
  </div>

  <div style={{ display:'flex',alignItems:'center'}}>
      <form>
        <input type="checkbox" checked={isChecked} onChange={shows}/>
        <span style={{ fontSize:'0.8rem' }}> Check this if you agree of our Terms and conditions</span>
      </form>
  </div>
{
    isChecked &&
  <div className='KAPE'>
    <button onClick={()=>setmd('Modals')}>Proceed To Website</button>
  </div>

}

  </div>


  </div>

</div>

 </div>
}

 
 <main>

<div className={CH["food-1"]} >
    <div className={CH["food-hero"]}>
        <div className={CH["food1-1"]} id={CH.cake} data-aos="fade-up-right">

        </div>  
        <div className={CH["food1-2"]} data-aos="fade-up-left">
            <h1 className={CH.title}>CAKE SLICES</h1>
            <div className={CH.div}><h2>Prep Time</h2> 20 min</div>
            <div className={CH.div}><h2>Cuisine</h2> Desserts</div>
            <div className={CH.div}><h2>Good for</h2> 8 - 12 servings</div>
        </div>

    </div>

    <div className={CH["food-method"]} data-aos="fade-up-right">
        <div className={CH.method}>
            <h1 className={CH.titles}>Method</h1>
            <h3 className={CH.step}>Step 1.</h3>
            <p>Preheat Oven: Preheat your oven to the recommended temperature stated in your cake recipe (usually around 350°F or 180°C).</p>
            <h3 className={CH.step}>Step 2.</h3>
            <p>Prepare Cake Batter: In a mixing bowl, combine the dry ingredients (such as flour, sugar, baking powder, and salt) and whisk to combine. In another bowl, mix the wet ingredients (like eggs, milk, oil, and vanilla extract). Gradually combine the wet and dry ingredients, mixing until a smooth batter forms.</p>
            <h3 className={CH.step}>Step 3.</h3>
            <p>Prepare Cake Pans: Grease the cake pans with butter or non-stick cooking spray. You can line the bottoms with parchment paper for easier removal after baking.</p>
            <h3 className={CH.step}>Step 4.</h3>
            <p>Fill Cake Pans and Bake: Pour the cake batter evenly into the prepared cake pans. Place them in the preheated oven and bake for the specified time according to your recipe (usually around 25-35 minutes). Check for doneness by inserting a toothpick into the center of the cake; if it comes out clean, the cake is done.</p>
            <h3 className={CH.step}>Step 5.</h3>
            <p>Cool and Remove from Pans: Once baked, allow the cakes to cool in the pans for 10-15 minutes. Then, carefully run a knife around the edges and invert the pans to remove the cakes onto a wire rack. Let them cool completely before frosting.</p>
            <h3 className={CH.step}>Step 6.</h3>
            <p>Frost and Decorate (Optional): Once the cakes are cooled, you can frost and decorate them as desired. Use frosting, ganache, whipped cream, fruit, sprinkles, or any preferred toppings to decorate your cake.</p>
        </div>
        
        <div className={CH.ingredients} data-aos="fade-up-left">
            <h1 className={CH.titles}>Ingredients</h1>
            <ul>
                <p><b>Dry Ingredients:</b></p>
                <li>2 cups all-purpose flour</li>
                <li>1 and 1/2 cups granulated sugar</li>
                <li>2 teaspoons baking powder</li>
                <li>1/2 teaspoon salt</li>
                <p><b>Wet Ingredients:</b></p>
                <li>1 cup milk (whole or buttermilk for added richness)</li>
                <li>1/2 cup unsalted butter (softened at room temperature)</li>
                <li>2 large eggs</li>
                <li>2 teaspoons vanilla extract</li>  
                <p><b>Optional:</b></p> 
                <li>Frosting</li>
                <p><b>add flavorings:</b></p> 
                <li> cocoa powder for a chocolate cake</li>
                <li>lemon zest for a lemon-flavored cake</li>

            </ul>

        </div>

    </div>

</div>

<div className={CH["food-1"]}>
    <div className={CH["food-hero"]}>
        <div className={CH["food1-1"]} id={CH.cupcake} data-aos="fade-up-right">
           
        </div>  
        <div className={CH["food1-2"]} data-aos="fade-up-left">
            <h1 className={CH.title}>Cup Cake</h1>
            <div className={CH.div}><h2>Prep Time</h2> 10 - 15 min</div>
            <div className={CH.div}><h2>Cuisine</h2> Desserts</div>
            <div className={CH.div}><h2>Good for</h2> 12 servings</div>
        </div>

    </div>

    <div className={CH["food-method"]} data-aos="fade-up-right">
        <div className={CH.method}>
            <h1 className={CH.titles}>Method</h1>
            <h3 className={CH.step}>Step 1.</h3>
            <p>Prepare Ingredients: Preheat the oven to 350°F (175°C). Gather the ingredients: 1 and 1/2 cups of all-purpose flour, 1 and 1/2 teaspoons of baking powder, 1/4 teaspoon of salt, 1/2 cup of softened unsalted butter, 1 cup of granulated sugar, 2 large eggs, 1 teaspoon of vanilla extract, and 1/2 cup of milk.</p>
            <h3 className={CH.step}>Step 2.</h3>
            <p>Mix Dry Ingredients: In a bowl, whisk together the flour, baking powder, and salt until well combined.</p>
            <h3 className={CH.step}>Step 3.</h3>
            <p>Combine Wet Ingredients: In another bowl, cream the softened butter and sugar until light and fluffy. Add the eggs one at a time, beating well after each addition. Mix in the vanilla extract.</p>
            <h3 className={CH.step}>Step 4.</h3>
            <p>Create Batter: Gradually add the dry ingredients to the wet ingredients, alternating with the milk, and mix until just combined. Be careful not to overmix.</p>
            <h3 className={CH.step}>Step 5.</h3>
            <p>Fill Cupcake Liners: Line a cupcake pan with paper liners. Spoon the batter into the liners, filling each about two-thirds full.</p>
            <h3 className={CH.step}>Step 6.</h3>
            <p>Bake and Cool: Place the cupcake pan in the preheated oven and bake for 18-20 minutes or until a toothpick inserted into the center of a cupcake comes out clean. Once baked, remove the cupcakes from the oven and let them cool in the pan for a few minutes before transferring them to a wire rack to cool completely.</p>

        </div>
        
        <div className={CH.ingredients} data-aos="fade-up-left">
            <h1 className={CH.titles}>Ingredients</h1>
            <ul>
                <p><b>Dry Ingredients:</b></p>
                <li>1 and 1/2 cups all-purpose flour</li>
                <li>1 and 1/2 teaspoons baking powder</li>
                <li>1/4 teaspoon salt</li>
                <p><b>Wet and Dairy Ingredients:</b></p>
                <li>1/2 cup unsalted butter (softened at room temperature)</li>
                <li>1 cup granulated sugar</li>
                <li>2 large eggs</li>
                <li>1/2 cup milk</li>
                <p><b>Optional:</b></p>
                <li>add frosting or toppings</li>
                <li>sprinkles </li>
                <li>vanilla extract</li>
                <li>powdered sugar</li>
                <li>food coloring</li>
            </ul>
        </div>
        
    </div>

</div>

<div className={CH["food-1"]}>
    <div className={CH["food-hero"]}>
        <div className={CH["food1-1"]} id={CH.drinks} data-aos="fade-up-right">

        </div>  
        <div className={CH["food1-2"]} data-aos="fade-up-left">
            <h1 className={CH.title}>COFFEE</h1>
            <div className={CH.div}><h2>Prep Time</h2> 5-6 min</div>
            <div className={CH.div}><h2>Cuisine</h2> Beverages</div>
            <div className={CH.div}><h2>Good for</h2> 4 - 6 cups</div>
        </div>

    </div>

    <div className={CH["food-method"]}>
        <div className={CH["method-1"]} data-aos="fade-up-right">
            <h1 className={CH.titles}>Method</h1>
            <h3 className={CH.step}>Step 1.</h3>
            <p>Espresso Machine: Making a shot of espresso typically takes around 25 to 30 seconds per shot, not including the time it takes for the machine to heat up initially (usually a few minutes). Preparing a milk-based espresso drink like a cappuccino or latte might take a couple of minutes longer due to steaming and frothing milk.</p>
            <h3 className={CH.step}>Step 2.</h3>
            <p>Pour-over (e.g., V60, Chemex): Brewing coffee using a pour-over method usually takes around 3 to 4 minutes, including the time to heat water and pour it over the coffee grounds.</p>
            <h3 className={CH.step}>Step 3.</h3>
            <p>French Press: Using a French press to brew coffee usually takes about 4 to 5 minutes. This time includes steeping the coffee grounds in hot water before pressing the plunger to separate the grounds.</p>
            <h3 className={CH.step}>Step 4.</h3>
            <p>AeroPress: Making coffee with an AeroPress can take around 1 to 2 minutes. It involves a shorter brewing time as the coffee is pressed through the grounds using air pressure.</p>
            <h3 className={CH.step}>Step 5.</h3>
            <p>Drip Coffee Maker: Preparing coffee in an automatic drip coffee maker may take approximately 5 to 6 minutes, which includes the time for the machine to heat water and drip the brewed coffee into the pot.</p>

        </div>
        
        <div className={CH.ingredients} data-aos="fade-up-left">
            <h1 className={CH.titles}>Ingredients</h1>
            <ul>
                <li>Coffee Beans or Ground Coffee</li>
                <li>Water</li>
                <p>Optional ingredients based on specific brewing methods or personal preferences:</p>
                <li>Milk or Cream</li>
                <p><b>Sweeteners:</b></p>
                <li>Sugar</li>
                <li>honey</li>
                <li>syrup</li>
                <li>2 tbsp Olive oil</li>
                <p><b>Flavorings (Optional):</b></p>
                <li>vanilla extract</li>
                <li>cinnamon</li>
                <li>nutmeg</li>
            </ul>
        </div>
        
    </div>

</div>

<div className={CH["food-1"]}>
    <div className={CH["food-hero"]}>
        <div className={CH["food1-1"]} id={CH.donut} data-aos="fade-up-right">
           
        </div>  
        <div className={CH["food1-2"]} data-aos="fade-up-left">
            <h1 className={CH.title}>Donut</h1>
            <div className={CH.div}><h2>Prep Time</h2> 15 - 30 min</div>
            <div className={CH.div}><h2>Cuisine</h2> Baked Goods</div>
            <div className={CH.div}><h2>Good for</h2> 4 - 6 servings </div>
        </div>

    </div>

    <div className={CH["food-method"]}>
        <div className={CH["method-1"]} data-aos="fade-up-right">
            <h1 className={CH.titles}>Method</h1>
            <h3 className={CH.step}>Step 1.</h3>
            <p>Prepare Dough: In a mixing bowl, combine 2 cups of all-purpose flour, 1/2 cup of sugar, 2 teaspoons of baking powder, 1/4 teaspoon of salt, and optionally add 1/4 teaspoon of nutmeg for flavor. Mix in 3/4 cup of milk, 1 egg, and 2 tablespoons of melted butter until a soft dough forms.</p>
            <h3 className={CH.step}>Step 2.</h3>
            <p>Shape Donuts: Roll out the dough on a floured surface to about 1/2-inch thickness. Use a donut cutter or two different-sized round cookie cutters to cut out donut shapes. If you don't have cutters, you can use a glass for the larger circle and the cap of a water bottle for the smaller circle.</p>
            <h3 className={CH.step}>Step 3.</h3>
            <p>Fry Donuts: Heat oil in a deep pan or pot to around 350°F (175°C). Carefully place the donuts into the hot oil, frying for about 1-2 minutes on each side or until they turn golden brown. Use a slotted spoon to remove them from the oil and place them on a paper towel-lined plate to drain excess oil.</p>
            <h3 className={CH.step}>Step 4.</h3>
            <p>Glaze or Coat: While the donuts are still warm, you can dip them in a simple glaze made by mixing powdered sugar with a little milk and vanilla extract. Alternatively, you can coat them in cinnamon sugar or powdered sugar for a classNameic finish.</p>
            <h3 className={CH.step}>Step 5.</h3>
            <p>Serve: Once glazed or coated, let the donuts cool slightly before serving. Enjoy them while they're fresh and warm!</p>
        </div>
        
        <div className={CH.ingredients} data-aos="fade-up-left">
            <h1 className={CH.titles}>Ingredients</h1>
            <ul>   
                <p><b>Dry Ingredients:</b></p>
                <li>2 cups all-purpose flour</li>
                <li>1/2 cup granulated sugar</li>
                <li>2 teaspoons baking powder</li>
                <li>1/4 teaspoon salt</li>
                <li>Optional: 1/4 teaspoon ground nutmeg for flavor</li>
                <p><b>Wet Ingredients:</b></p>
                <li>3/4 cup milk</li>
                <li>1 large egg</li>
                <li>2 tablespoons melted butterteaspoons baking powder</li>
                <p><b>For Frying:</b></p>
                <li>Cooking oil for frying (vegetable oil, canola oil, or another frying oil of your choice)</li>
                
            </ul>
        </div>
        
    </div>

</div>

<div className={CH["food-1"]}>
    <div className={CH["food-hero"]}>
        <div className={CH["food1-1"]}
 id={CH.pancake} data-aos="fade-up-right">
           
        </div>  
        <div className={CH["food1-2"]} data-aos="fade-up-left">
            <h1 className={CH.title}>Pancake</h1>
            <div className={CH.div}><h2>Prep Time</h2> 5- 10 min</div>
            <div className={CH.div}><h2>Cuisine</h2> Brunch </div>
            <div className={CH.div}><h2>Good for</h2> 2 days</div>
        </div>

    </div>

    <div className={CH["food-method"]}>
        <div className={CH["method-2"]} data-aos="fade-up-right">
            <h1 className={CH.titles}>Method</h1>
            <h3 className={CH.step}>Step 1.</h3>
            <p>Prepare Batter: In a mixing bowl, combine 1 cup of all-purpose flour, 2 tablespoons of sugar, 2 teaspoons of baking powder, and a pinch of salt. In a separate bowl, whisk 1 cup of milk, 1 egg, and 2 tablespoons of melted butter. Gradually add the wet ingredients to the dry, mixing until just combined. Let the batter sit for a few minutes to allow the baking powder to activate.</p>
            <h3 className={CH.step}>Step 2.</h3>
            <p>Preheat Pan or Griddle: Place a non-stick skillet or griddle over medium heat. Add a little butter or cooking spray to prevent sticking.</p>
            <h3 className={CH.step}>Step 3.</h3>
            <p>Pour Batter: Once the pan is hot, pour about 1/4 cup of batter per pancake onto the skillet. Use the back of a spoon to spread the batter into a round shape if necessary. Cook for 2-3 minutes, or until bubbles form on the surface.</p>
            <h3 className={CH.step}>Step 4.</h3>
            <p>Flip and Cook: Carefully flip the pancake with a spatula when bubbles have formed and the edges look set. Cook for an additional 1-2 minutes, or until golden brown on the other side.</p>
            <h3 className={CH.step}>Step 5.</h3>
            <p>Serve: Transfer the cooked pancakes to a plate. Repeat the process with the remaining batter. Serve the pancakes warm with your choice of toppings, such as maple syrup, fresh fruits, whipped cream, or chocolate chips.</p>
        </div>
        
        <div className={CH["ingredients-2"]} data-aos="fade-up-left">
            <h1 className={CH.titles}>Ingredients</h1>
            <ul>
                <p><b>Dry Ingredients:</b></p>
                <li>1 cup all-purpose flour</li>
                <li>2 tablespoons sugar (granulated)</li>
                <li>2 teaspoons baking powder</li>
                <li>Pinch of salt</li>
                <p><b>Wet Ingredients:</b></p>
                <li>1 cup milk</li>
                <li>1 large egg</li>
                <li>2 tablespoons melted butter (or vegetable oil)</li>

                <p><b>Optional for flavor variations or toppings:</b></p>
                
                <li>Vanilla extract</li>
                <li>Cinnamon</li>
                <li>Blueberries, chocolate chips, or sliced bananas for mixing into the batter or topping the pancakes</li>
                <li>Maple syrup, honey, whipped cream, or fruit for serving</li>    
            </ul>
        </div>
        
    </div>

</div>
</main>
 
 <Footers MDK= {MDD}/>
 
 </>
  )
}

export default Ress