import React from "react";
import Button from '@material/react-button';

import './Lesson.scss';

export class Lesson extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="lesson">
                    <div className="lesson-boxes">
                        <div data-datacamp-exercise data-lang="python">
                            <code data-type="pre-exercise-code">
                                # no pec
  </code>
                            <code data-type="sample-code">
                                # Create a variable a, equal to 5
                            
                            
                                # Print out a
                            
  </code>
                            <code data-type="solution">
                                # Create a variable a, equal to 5
                                a = 5
                            
                                # Print out a
                                print(a)
  </code>
                            <code data-type="sct">
                                test_object("a")
                                test_function("print")
                                success_msg("Great job!")
  </code>
                            <div data-type="hint">
                                Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.
  </div>
                        </div>
                        <script>
                            DCL.init();
                        </script>
                    </div>
                </div>
            </div>
        );
    }
}

