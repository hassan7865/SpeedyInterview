import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function RegisterPage() {
  return (
<div className="w-full flex flex-col items-center py-10">
      {/* Heading and Subheading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Join SpeedyIntervue and streamline your hiring process
        </p>
      </div>

      {/* Role Label */}
      <div className="w-[400px] mb-2">
        <Label className="text-sm text-muted-foreground mb-1">I am:</Label>
      </div>

      {/* Tabs for Roles */}
      <Tabs defaultValue="candidate" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="candidate">Candidate</TabsTrigger>
          <TabsTrigger value="interviewer">Interviewer</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
        </TabsList>

        {/* Candidate Form */}
        <TabsContent value="candidate">
          <Card>
            <CardHeader>
              <CardTitle>Individual Candidate</CardTitle>
              <CardDescription>
                Sign up to access interview preparation tools and feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="candidate-name">Full Name</Label>
                <Input id="candidate-name" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="candidate-email">Email</Label>
                <Input id="candidate-email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="candidate-password">Password</Label>
                <Input id="candidate-password" type="password" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms-candidate" />
                <Label htmlFor="terms-candidate" className="text-sm">
                  I agree to the <a href="/terms" className="underline">terms and conditions</a>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Button className="w-full">Create Account</Button>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="underline">Sign in</Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Interviewer Form */}
        <TabsContent value="interviewer">
          <Card>
            <CardHeader>
              <CardTitle>Human Interviewer</CardTitle>
              <CardDescription>
                Apply to conduct expert interviews on the platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="interviewer-name">Full Name</Label>
                <Input id="interviewer-name" placeholder="Jane Smith" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="interviewer-email">Email</Label>
                <Input id="interviewer-email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="interviewer-specialization">Specialization</Label>
                <Input id="interviewer-specialization" placeholder="Frontend, DevOps, etc." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="interviewer-password">Password</Label>
                <Input id="interviewer-password" type="password" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms-interviewer" />
                <Label htmlFor="terms-interviewer" className="text-sm">
                  I agree to the <a href="/terms" className="underline">terms and conditions</a>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Button className="w-full">Register</Button>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="underline">Sign in</Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Company Form */}
        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>Hiring Company</CardTitle>
              <CardDescription>
                Create an account to manage and schedule interviews.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Acme Corp" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="company-email">Work Email</Label>
                <Input id="company-email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="company-role">Your Role</Label>
                <Input id="company-role" placeholder="HR, Recruiter, etc." />
              </div>
              <div className="space-y-1">
                <Label htmlFor="company-password">Password</Label>
                <Input id="company-password" type="password" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms-company" />
                <Label htmlFor="terms-company" className="text-sm">
                  I agree to the <a href="/terms" className="underline">terms and conditions</a>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Button className="w-full">Register Company</Button>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="underline">Sign in</Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
