function showModal(carType) {
    let modal = document.getElementById('myModal');
    let modalContent = document.getElementById('modalContent');

    modal.style.display = 'block';

    switch (carType) {
        case 'mk4supra':
            modalContent.innerHTML = `
                <h3>Toyota MK4 Supra</h3>
                <p><strong>Price:</strong> A well-optioned Toyota MK4 Supra was priced around $40,000, but now can sell near the $100k mark.</p>
                <p><strong>Popularity:</strong> The Toyota Supra (A80) Mk4 was famous for its appearances in Fast and Furious movies, drag racing, and track racing.</p>
                <p>The potential that lies within the (A80) Mk4 Supra is truly amazing because, with some simple modifications, it can easily put cars with far larger engines to shame. 
                Today we will be talking about the Supra and its incredible ability to produce insane amounts of power.</p>
                <h5>How much HP does a MK4 Supra have?</h5>
                <p>Built between 1993 and 2002, The Toyota Supra MkIV offered two different engine options; 
                a naturally aspirated 2JZ-GE, 3.0-litre, straight 6 with 220 horsepower, and a 2JZ-GTE 3.0-litre twin-turbocharged straight 6 with 280 horsepower. 
                Each model offered both automatic and manual options.</p>
            `;
            break;

        case 'nissangtr':
            modalContent.innerHTML = `
                <h3>Nissan GTR (R34)</h3>
                <p><strong>Origin:</strong> The GT-R lineage traces back to the Nissan Skyline GT-Rs (R32, R33, R34), but the R35 dropped the "Skyline" badge, becoming its own entity in 2007.</p>
                <p><strong>Evolution:</strong> Over the years, Nissan has iteratively refined the GT-R with improved aerodynamics, increased power, and technological enhancements.</p>
                <p><strong>Unique Features:</strong> ATTESA E-TS All-Wheel Drive: Advanced all-wheel-drive system that can variably control torque split between the front and rear wheels for optimal traction.</p>
                <p><strong>Awards and Recognition:</strong> Over the years, the GT-R has collected numerous accolades for its performance, technology, and design. 
                It's often praised by automotive journalists and enthusiasts alike for offering supercar-beating performance at a fraction of the cost.</p>
                <p><strong>Trivia:</strong> The GT-R's engine is hand-built in a hermetically sealed factory by a select group of engineers known as "Takumi". 
                Each engine bears a plaque with the name of the engineer who assembled it.
                The GT-R's distinct exhaust note is the result of meticulous tuning. Nissan even employed sound engineers from the video game "Gran Turismo" to help perfect it.</p>                
                `;
            break;

        case 'shelby':
            modalContent.innerHTML = `
                <h3>Shelby GT500</h3>
                <p><strong>Technical Specs:</strong> Engine: 7.0-liter (428 cubic inch) "Police Interceptor" V8 with two 600 CFM Holly four-barrel carburetors.
                Horsepower: 355 horsepower and 420 lb-ft of torque.
                Transmission: Available with a 4-speed manual or a 3-speed automatic.
                Performance: While exact numbers vary, 0 to 60 mph was achieved in the mid-6-second range.</p>
                <p><strong>Unique Features:</strong> The GT500 had a unique grille, elongated nose, and additional scoops and vents compared to the standard Mustang. 
                The signature twin racing stripes over the top and the Shelby Cobra emblem differentiated it further.
                Suspension: Shelby modified the suspension for improved handling and braking capabilities, setting it apart from the standard Mustangs.</p>
                <p><strong>Awards and Recognition:</strong> The '67 GT500 has consistently been featured in "best of" lists for classic cars, muscle cars, 
                and automotive designs by various automotive publications and enthusiasts.</p>
                <p><strong>Trivia:</strong> The name "Eleanor" was popularized by the 2000 movie "Gone in 60 Seconds" and has since become synonymous with the '67 Shelby GT500, 
                especially the custom silver version with black stripes.
                Carroll Shelby's involvement ensured that each GT500 bore a dashboard plaque with a unique serial number, certifying its authenticity.</p>                
            `;
            break;

        case 'mazda':
            modalContent.innerHTML = `
                <h3>Mazda RX-7 (FD)</h3>
                <p><strong>Technical Specs:</strong> Engine: 13B-REW 1.3-liter rotary engine equipped with sequential twin-turbochargers.
                Horsepower: The engine produced 252 horsepower in its initial iteration, with later models reaching up to 276 horsepower (in the Japanese market).
                Transmission: Offered with a 5-speed manual or 4-speed automatic.
                Performance: The RX-7 (FD) could accelerate from 0 to 60 mph in about 5 seconds.
                <p><strong>Unique Features:</strong> The GT500 had a unique grille, elongated nose, and additional scoops and vents compared to the standard Mustang. 
                The signature twin racing stripes over the top and the Shelby Cobra emblem differentiated it further.
                Suspension: Shelby modified the suspension for improved handling and braking capabilities, setting it apart from the standard Mustangs.</p>
                <p><strong>Awards and Recognition:</strong> Throughout its production life, the RX-7 received numerous accolades, being praised for its handling, design, and unique engine. 
                It consistently ranked among the best sports cars of its era.</p>
                <p><strong>Trivia:</strong> The rotary engine, while known for its smoothness and high RPMs, is also notorious for its "apex seals," 
                a common point of wear requiring attention or replacement.
                The RX-7's engine lacks pistons, a defining trait of rotary engines, which makes its working principle different from conventional internal combustion engines.
                </p>                
            `;
            break;

        case 'lamborghini':
            modalContent.innerHTML = `
                <h3>Lamborghini Countach</h3>
                <p><strong>Technical Specs:</strong> Engine Lineup: Powered by a V12, the engine's displacement ranged from 4.0 liters in the earliest LP400 to 5.2 liters in the later 5000 QV.
                Transmission: A 5-speed manual gearbox was standard across all versions.
                Aerodynamics: The car featured NACA ducts, an optional spoiler, and a cabin-forward design, giving it a unique aerodynamic profile.</p>
                <p><strong>Unique Features:</strong> Cabin Design: The cabin was revolutionary, with a hexagonal and angular theme. 
                Instrumentation was angled towards the driver, emphasizing the car's driver-focused intent.
                Wheels: The telephone-dial style wheels, particularly on the LP400S, became one of the signature designs associated with the Countach.</p>
                <p><strong>Awards and Recognition:</strong> Celebrated as a revolutionary design, the Countach has been exhibited in museums and design exhibitions, 
                transcending the automotive realm and being recognized as a piece of art.</p>
                <p><strong>Trivia:</strong> Contrary to most cars, the Countach's rear tires were significantly wider than its front tires, giving it a staggered stance and helping with rear traction.
                The car lacked a rearview mirror in its initial design. Given its limited rearward visibility, a periscope-style roof mirror was initially conceived but later dropped.</p>   
                <p><strong>Future:</strong> The Countach's lineage is evident in successive Lamborghini models, with its audacious spirit and design language influencing successors like the Diablo and Aventador. 
                Recently, Lamborghini celebrated the Countach with a tribute model, showcasing its lasting legacy.</p>   

            `;
            break;

        case 'chevrolet':
            modalContent.innerHTML = `
                    <h3>CHEVROLET CORVETTE  C2 STING RAY</h3>
                    <p><strong>Technical Specs:</strong> Engine Range: The C2 featured a variety of V8 engines, from the base 327 cubic inch (5.4L) V8 producing 250 hp, 
                    to the ferocious 427 cubic inch (7.0L) V8 in the 1967 model churning out 435 hp.
                    Transmission: Options included a 3-speed manual as standard, with 4-speed manual and 2-speed Powerglide automatic as options.
                    Suspension: The C2 was the first Corvette to feature an independent rear suspension, significantly improving its handling prowess.</p>
                    <p><strong>Unique Features:</strong> Split Window: The 1963 coupe boasted a unique split rear window, a design cue that was dropped in 
                    subsequent years due to visibility concerns but is now highly coveted by collectors.                    
                    Sting Ray Name: This generation was the first (and until the C7, the only) to use the "Sting Ray" name, a moniker inspired by the sea creature.</p>
                    <p><strong>Awards and Recognition:</strong> The C2, with its blend of performance and style, frequently graces lists of the best sports cars and most beautiful car designs ever created.</p>
                    <p><strong>Trivia:</strong> The C2 was the debut of the Corvette's "Stinger" hood, particularly associated with the big-block 427 V8 models.
                    It was also the first Corvette to feature hidden headlamps, a design trait carried through many subsequent generations.</p>                
                    <p><strong>Legacy:</strong> While the C2 had a relatively short production span, its impact on the Corvette brand and automotive design at large was profound. 
                    Its design cues and performance ethos have influenced many subsequent Corvette generations.
                    The Chevrolet Corvette C2 Stingray is more than just a car; it encapsulates the spirit and ambition of 1960s America. With its blend of aggressive styling, 
                    raw power, and groundbreaking design elements, the C2 remains an enduring symbol of American automotive excellence
                    </p>                
                `;
            break;

        default:
            modalContent.textContent = "No information available.";
    }
}

function closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
}