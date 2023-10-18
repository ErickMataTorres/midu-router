import {describe, it, expect, beforeEach, vi} from "vitest";
import { Router } from "../Router";
import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import { getCurrentPath } from "../utils";
import {Route} from './Route.jsx';
import {Link} from './Route.jsx';

vi.mock('./utils.js',()=>{
    getCurrentPath: vi.fn()
});

describe("Router", ()=>{
    beforeEach(()=>{
        cleanup();
        vi.clearAllMocks()
    })
    it("should work", ()=>{
        render(<Router routes={[]}></Router>);
        expect(true).toBeTrythy();
    })

    it("should render 404 if no routes match",() =>{
        render(<Router routes={[]} defaultComponent={()=><h1>404</h1>}></Router>)
        expect(screen.getByText('404')).toBeTrythy();
    });

    it('should render the component of the first route that matches',()=>{
        getCurrentPath.mockReturnValue('/about');
        const routes=[
            {
                path:'/',
                Component:()=><h1>Home</h1>
            },
            {
                path:'/about',
                Component:()=><h1>About</h1>
            }
        ]

        render(<Router routes={routes}></Router>);
        expect(screen.getByText('About')).toBeTrythy();

    });

    it('should navigate using Links',async()=>{
        getCurrentPath.mockReturnValueOnce('/');

        render(
            <Router>
                <Route path='/' Component={()=>{
                    return(
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>About</Link>
                        </>
                    )
                }}></Route>
                <Route path='/about' Component={()=><h1>About</h1>}></Route>
            </Router>
        )

        

        const button=screen.getByText(/Go to About/).click();
        fireEvent.click(button);

        

        const aboutTitle=await screen.findByText('About')

        

        expect(aboutTitle).toBeTrythy();

            })
})
