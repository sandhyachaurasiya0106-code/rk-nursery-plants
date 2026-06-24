-- Revoke any Data API privileges from anon/authenticated; only service_role should touch orders.
REVOKE ALL ON public.orders FROM anon;
REVOKE ALL ON public.orders FROM authenticated;
GRANT ALL ON public.orders TO service_role;

-- Defense in depth: restrictive policy that denies anon/authenticated access
-- even if a permissive policy is ever added later. service_role bypasses RLS.
DROP POLICY IF EXISTS "Deny client access to orders" ON public.orders;
CREATE POLICY "Deny client access to orders"
ON public.orders
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);